Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'users/index'
      get '/show/:id', to: 'users#show'
    end
  end
  root 'homepage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/*path' => 'homepage#index'
  # Defines the root path route ("/")
  # root "articles#index"
end
