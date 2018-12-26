class Api::UsersController < ApplicationController
    before_action :set_user, only: [:show, :update]

    def user_session
        render json: current_user
    end

    def show
        render json: @user
    end

    def set_token
        response = current_user.update(token_params)
        current_user.create_customer_id(current_user.token)
        render json: response 
    end

    def update
        if @user.update(user_params)
            render json: @user
        else
            render json: @user.errors
        end
    end

    private

        def set_user
            @user = User.find(params[:id])
        end

        def token_params
            params.require(:user).permit(:token)
        end

        def user_params
            params.require(:user).permit(:name, :about, :email)
        end
end