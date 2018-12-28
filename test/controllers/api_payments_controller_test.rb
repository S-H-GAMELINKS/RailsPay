require "test_helper"

class ApiPaymentsControllerTest < ActionDispatch::IntegrationTest
    include Devise::Test::IntegrationHelpers

    def setup
        @user = users( :dummy )
        sign_in(@user)
    end

    test "should payment create" do
        post "/api/payments", params: {payment: {price: "10000"}}
        assert_response :success
    end
end