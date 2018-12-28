require "test_helper"

class ApiPaymentsControllerTest < ActionDispatch::IntegrationTest
    test "should payment create" do
        post "/api/payments", params: {payment: {price: "100"}}
        assert_response :success
    end
end