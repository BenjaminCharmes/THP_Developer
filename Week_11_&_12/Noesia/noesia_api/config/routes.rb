Rails.application.routes.draw do
  resources :join_table_user_achievements
  resources :achievements
  resources :histories
  resources :topics
  resources :enigmas
  devise_for :users,
             controllers: {
               sessions: 'users/sessions',
               registrations: 'users/registrations'
             }
  get '/member-data', to: 'members#show'
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
