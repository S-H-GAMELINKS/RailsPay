class Api::UsersController < ApplicationController
    before_action :set_user, only: [:show, :update]

    def user_session
        render json: current_user
    end

    def show
        render json: @user
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

        def user_params
            params.require(:user).permit(:name, :about, :email)
        end
end