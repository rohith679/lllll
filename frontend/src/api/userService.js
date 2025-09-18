import api from './client';

// Public endpoints under /user per backend routes
const base = '/user';

export const userService = {
  // Auth
  login: (payload) => api.post(`${base}/account/login`, payload),
  createUser: (payload) => api.post(`${base}/create/user`, payload),

  // Reviews
  createReview: (payload) => api.post(`${base}/create/review`, payload),
  updateReview: (payload) => api.post(`${base}/review/update`, payload),
  listReviews: (params) => api.get(`${base}/review/all`, { params }),
  getReviewById: (params) => api.get(`${base}/review/details`, { params }),
  deleteReview: (params) => api.delete(`${base}/review/delete`, { params }),
  listReviewsAgree: (params) => api.get(`${base}/review/list/agree`, { params }),

  // Quick Service
  createQuickService: (payload) => api.post(`${base}/quick-service/create`, payload),
  updateQuickService: (payload) => api.post(`${base}/quick-service/update`, payload),
  listQuickServices: (params) => api.get(`${base}/quick-service/all`, { params }),
  getQuickServiceById: (params) => api.get(`${base}/quick-service/details`, { params }),
  deleteQuickService: (params) => api.delete(`${base}/quick-service/delete`, { params }),

  // Contact
  createContact: (payload) => api.post(`${base}/contact`, payload),
  listContacts: (params) => api.get(`${base}/contact/all`, { params }),
  getContactById: (params) => api.get(`${base}/contact/details`, { params }),
  updateContact: (payload) => api.post(`${base}/contact/update`, payload),
  deleteContact: (params) => api.delete(`${base}/contact/delete`, { params }),

  // Home Section Media
  createHomeSectionMedia: (payload) => api.post(`${base}/create/home-section-media`, payload),
  updateHomeSectionMedia: (payload) => api.post(`${base}/update/home-section-media`, payload),
  listHomeSectionMedia: (params) => api.get(`${base}/list/home-section-media`, { params }),

  // Upload file (PUT)
  uploadFile: (data, config) => api.put(`${base}/upload/file`, data, config),
};

export default userService;


