Rails.application.routes.draw do
  
  root 'web#index'
  get "/about", to: "web#index"
  get "/contact", to: "web#index"
  get "/payment", to: "web#index"

  get "/products", to: "web#index"
  get "/products/:id", to: "web#index"
  get "/products/:id/edit", to: "web#index"
  get "/products/new", to: "web#index"

  get "/sign_up", to: "web#index"
  get "/sign_in", to: "web#index"

  get "/users/mypages", to: "web#index"
  get "/users/mypages/edit", to: "web#index"
  get "/users/:id", to: "web#index"
  
  devise_for :users

  namespace :api, format: 'json' do
    resources :products
    put '/users' => 'users#update'
    post '/users/set_token' => 'users#set_token'
    get '/users/sessions' => 'users#user_session'
    get '/users/:id' => 'users#show'
    post '/payments' => 'payments#create'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
