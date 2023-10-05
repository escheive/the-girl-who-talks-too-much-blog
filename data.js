import supabase from './supabase';

const fetchPostsData = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascneding: false });

    if (error) {
        console.error('Error fetching user data:', error);
        return [];
    }

    return data;
};

export { fetchPostsData };