import { useEffect, useState } from 'react';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import { getPollIdFromShortCode, getPollIdFromBrandedSlug } from '../utils/urlShortener';
import { usePoll } from '../contexts/PollContext';
import { Loader2 } from 'lucide-react';

interface ShortLinkRedirectProps {
  type: 'short' | 'branded';
}

export const ShortLinkRedirect = ({ type }: ShortLinkRedirectProps) => {
  const { code } = useParams();
  const location = useLocation();
  const { polls } = usePoll();
  const [loading, setLoading] = useState(true);
  const [pollId, setPollId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const resolvePollId = () => {
      try {
        let resolvedPollId: string | null = null;

        if (type === 'short' && code) {
          resolvedPollId = getPollIdFromShortCode(code);
        } else if (type === 'branded') {
          // For branded links, extract the slug from the pathname
          const pathname = location.pathname;
          // Remove leading slash and check if it's a potential branded link
          const slug = pathname.substring(1);
          
          // Skip known routes that aren't branded links
          const knownRoutes = [
            'campaigns', 'vision', 'join', 'contact', 'about', 
            'volunteer', 'partner', 'vote', 'events', 'resources', '404'
          ];
          
          if (knownRoutes.includes(slug) || slug.startsWith('p/') || slug === '') {
            setError('Not a branded link');
            setLoading(false);
            return;
          }
          
          resolvedPollId = getPollIdFromBrandedSlug(slug);
        }

        if (!resolvedPollId) {
          setError('Link not found');
          setLoading(false);
          return;
        }

        // Verify the poll exists in our context
        const pollExists = polls.some(poll => poll.id === resolvedPollId);
        if (!pollExists) {
          setError('Poll not found');
          setLoading(false);
          return;
        }

        setPollId(resolvedPollId);
        setLoading(false);
      } catch (err) {
        setError('Invalid link');
        setLoading(false);
      }
    };

    resolvePollId();
  }, [code, location.pathname, type, polls]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-purple-600 mx-auto mb-4" />
          <p className="text-gray-600">Resolving link...</p>
        </div>
      </div>
    );
  }

  if (error || !pollId) {
    // For branded links that don't match, fall back to the original 404 handler
    if (type === 'branded') {
      return <Navigate to="/404" replace />;
    }
    // For short links, show a specific error
    return <Navigate to="/404" replace />;
  }

  // Redirect to the main page with poll context
  return <Navigate to={`/?poll=${pollId}`} replace />;
};