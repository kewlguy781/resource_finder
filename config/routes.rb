Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    get "/entries/all", to: "entries#all"
    get "/:user_id/my_entries", to: "entries#user_entries"
    get "/:user_id/my_comments", to: "comments#user_comments"
    get "/search", to: "entries#search"
    resources :categories do
      resources :entries 
      end
    
    resources :entries do
      resources :comments
      end
    end

  get '*other', to: 'static#index'
end
