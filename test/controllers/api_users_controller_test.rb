require "test_helper"

class ApiUsersControllerTest < ActionDispatch::IntegrationTest
    include Devise::Test::IntegrationHelpers

    def setup
        @user = users( :dummy )
        sign_in(@user)
    end

end