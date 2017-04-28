Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :topics, only: [:index, :show] do
    	resources :questions, only: [:show]
    end
  end
end
