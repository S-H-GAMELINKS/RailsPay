require "test_helper"

class ApiProductsControllerTest < ActionDispatch::IntegrationTest
    test "should get index" do
        get "/api/products"
        assert_response :success
    end
end