import supabase from './supabase';

const fetchPostsData = async () => {
    try {
        // Check if you're in the development (local) environment
        const isLocal = process.env.NODE_ENV === 'development';

        // Use the appropriate Supabase client based on the environment
        const client = isLocal ? supabase : supabase.client

        if (isLocal) {
            // Query your local PostgreSQL database directly
            const data = await client.any('SELECT * FROM posts ORDER BY created_at DESC');

            return data;
        } else {
            const { data, error } = await client
                .from('posts')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching user data:', error);
                return [];
            }
        }

        return data;
    } catch (error) {
        console.error('Error in fetchPostsData:', error);
        return [];
    }
};

const fetchSinglePostData = async (postId) => {
    try {
      // Check if you're in the development (local) environment
      const isLocal = process.env.NODE_ENV === 'development';
  
      // Use the appropriate Supabase client based on the environment
      const client = isLocal ? supabase : supabase.client;
  
      let post;
  
      if (isLocal) {
        // Query your local PostgreSQL database directly
        post = await client.oneOrNone('SELECT * FROM posts WHERE id = $1', postId);
      } else {
        const { data, error } = await client
          .from('posts')
          .select()
          .eq('id', postId)
          .single();
  
        if (error || !data) {
          console.error('Error fetching post data:', error);
          return null;
        }
  
        post = data;
      }
  
      return post;
    } catch (error) {
      console.error('Error in fetchSinglePostData:', error);
      return null;
    }
};

const createPost = (postData) => {
    try {
        // Check if you're in the development (local) environment
        const isLocal = process.env.NODE_ENV === 'development';
  
        // Use the appropriate Supabase client based on the environment
        const client = isLocal ? supabase : supabase.client;

        if (isLocal) {
            
        }
  
    } catch (error) {
        console.error('Error in createPost function @/data.js:', error);
        return null;
    }
}

export { fetchPostsData, fetchSinglePostData };