class WebController < ApplicationController
  def index
    gon.PAYJP_PUBLIC_KEY = ENV['PAYJP_PUBLIC_KEY']
    gon.PAYJP_SECRET_KEY = ENV['PAYJP_SECRET_KEY']
  end
end
