Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    
    resources :categories do
      resources :entries 
      end
    
    resources :entries do
      resources :comments
      end
    end

  get '*other', to: 'static#index'
end
