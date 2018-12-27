require "test_helper"

class ApiProductsControllerTest < ActionDispatch::IntegrationTest
    test "should get index" do
        get "/api/products"
        assert_response :success
    end

    test "should get show" do
        get "/api/products/1"
        assert_response :success
    end
end