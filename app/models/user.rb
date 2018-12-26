class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  def create_customer_id(token)
    Payjp.api_key = ENV['PAYJP_SECRET_KEY']

    Payjp::Customer.create(
      card: token
    )
  end
end
