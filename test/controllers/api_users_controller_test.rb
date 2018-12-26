require "test_helper"

class ApiUsersControllerTest < ActionDispatch::IntegrationTest
    include Devise::Test::IntegrationHelpers

    def setup
        @user = users( :dummy )
        sign_in(@user)
    end

    test "should set token for user" do
        post "/api/users/set_token", params: { user: {token: "hogehoge"}}
        assert_equal true, @user.token == "hogehoge"
    end
end