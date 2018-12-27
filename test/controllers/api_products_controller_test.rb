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

    test "should get new" do
        get "/api/products/new"
        assert_response :success
    end

    test "should get edit" do
        get "/api/products/1/edit"
        assert_response :success
    end
end