Rails.application.routes.draw do
  devise_for :users
  root 'web#index'
  get "/about", to: "web#index"
  get "/contact", to: "web#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
