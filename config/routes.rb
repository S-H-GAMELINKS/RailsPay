Rails.application.routes.draw do
  devise_for :users
  root 'web#index'
  get "/about", to: "web#index"
  get "/contact", to: "web#index"

  get "/sign_up", to: "web#index"
  get "/sign_in", to: "web#index"

  get "/users/mypages", to: "web#index"
  get "/users/mypages/edit", to: "web#index"
  get "/users/:id", to: "web#index"

  namespace :api, format: 'json' do
    put '/users' => 'users#update'
    get '/users/sessions' => 'users#user_session'
    get '/users/:id' => 'users#show'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
