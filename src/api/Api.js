import axios from "axios";

const API_URL = "http://localhost:2000/api/v1";

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// Fungsi Login
export const login = (username, password) => {
  return api.post("/auth/login", {
    username,
    password,
  });
};

// Fungsi Logout
export const logout = () => {
  return api.post("/auth/logout");
};

export const getMyUser = () => {
  return api.get("/me");
};

// Fungsi Ubah Password
export const changePassword = (
  username,
  oldPassword,
  newPassword,
  confirmPassword
) => {
  return api.patch("/auth/changePassword", {
    username,
    oldPassword,
    newPassword,
    newConfirmPassword: confirmPassword,
  });
};

// Tampilkan berita
export const getNews = () => {
  return api.get("/news");
};

// Tampilkan 3 berita terakhir di Beranda
export const getLatestNews = () => {
  return api.get("/homepage/latest-news");
};

// Tambahkan berita
export const postNews = (title, content, image) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("content", content);
  formData.append("image", image);

  return api.post("/news", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Tampilkan events
export const getEvents = () => {
  return api.get("/event");
};

// Tampilkan 3 acara terakhir di Beranda
export const getLatestEvents = () => {
  return api.get("/homepage/latest-event");
};

// Tambahkan events
export const postEvents = (title, description, image, date) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("image", image);
  formData.append("date", date);

  return api.post("/event", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Tampilkan programAlumni
export const getProgramAlumni = () => {
  return api.get("/alumni-program");
};

// Tampilkan 3 program alumni terakhir di Beranda
export const getLatestProgramAlumni = () => {
  return api.get("/homepage/latest-alumni-program");
};

// Tambahkan program alumni
export const postProgramAlumni = (title, description, image, category) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("image", image);
  formData.append("category", category);

  return api.post("/alumni-program", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getMyEvents = () => {
  return api.get("/event/my-events");
};

export const getDetailEvent = (id) => {
  return api.get(`/my-events/${id}`)
}

export const getMyNews = () => {
  return api.get("/news/my-news");
};

export const updateEvents = (id, payload) => {
  return api.patch(`event/${id}`, payload);
};

export const updateNews = (id, payload) => {
  return api.patch(`news/${id}`, payload);
};

export const getEventsToBeVerified = () => {
  return api.get("/event/to-be-verified");
};

export const getNewsToBeVerified = () => {
  return api.get("/news/to-be-verified");
};

export const verifyEvents = (id, action) => {
  return api.patch(`/event/${id}/verify`, { action });
};

export const verifyNews = (id, action) => {
  return api.patch(`/news/${id}/verify`, { action });
};

export const verifyProgramAlumni = (id, action) => {
  return api.patch(`/alumni-program/${id}/verify`, { action });
};

export const getProgramAlumniToBeVerified = () => {
  return api.get("/alumni-program/to-be-verified");
};

export const getVerifiedEvents = () => {
  return api.get("/event/verified");
};

export const getVerifiedNews = () => {
  return api.get("/news/verified")
}

export const getVerifiedProgramAlumni = () => {
  return api.get("/alumni-program/verified")
}

export const activationEvents = (id, isActive) => {
  return api.patch(`/event/${id}/toggle-active`, { isActive });
};

export const activationNews = (id, isActive) => {
  return api.patch(`/news/${id}/toggle-active`, { isActive });
};

export const activationProgramAlumni = (id, isActive) => {
  return api.patch(`/alumni-program/${id}/toggle-active`, { isActive });
};

export const broadcastMessage = (title, message) => {
  return api.post('/broadcast/', {
    title: title,
    message: message,
  });
};

export const getProfile = (id) => {
  return api.get(`/profile/${id}`);
};

export const updateProfile = (id) => {
  return api.patch(`/profile/${id}`);
};




export default api;
