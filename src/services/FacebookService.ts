import axios from "axios";
import { FacebookPost, FacebookPostResponse } from "../dto/facebook.dto";

const PAGE_ID = 1234;
const ACCESS_TOKEN = "1234";

export const fetchFacebookPosts = async (): Promise<FacebookPost[]> => {
  //this function should return the define facebook post type format
  try {
    const response = await axios.get<FacebookPostResponse>(
      `https://graph.facebook.com/${PAGE_ID}/posts?fields=id,message,created_time,full_picture,picture,permalink_url&access_token=${ACCESS_TOKEN}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Unexpected error:", error);

    return [];
  }
};
