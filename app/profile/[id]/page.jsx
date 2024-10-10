"use client";

import { useState, useEffect } from "react";

import Profile from "@components/Profile";
import { useSearchParams } from "next/navigation";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    const fetchUserPost = async () => {
      const response = await fetch(`api/users/${params?.id}/posts`);
      const data = await response.json();
      setUserPosts(data);
    };
    if (params?.id) {
      fetchUserPost();
    }
  }, []);

  return (
    <Profile
      name="My"
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={userPosts}
    />
  );
};

export default UserProfile;
