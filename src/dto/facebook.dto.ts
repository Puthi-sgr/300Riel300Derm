export interface FacebookPost {
  id: string;
  message: string;
  created_time: string;
  full_picture: string;
  permalink_url: string;
}

export interface FacebookPostResponse {
  data: FacebookPost[];
  paging: {
    previous: string;
    next: string;
  };
}
