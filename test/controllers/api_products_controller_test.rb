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

    test "should product create" do
        post "/api/products", params: {product: {name: "test", content: "test", price: "100"}}
        assert_response :success
    end

    test "should get edit" do
        get "/api/products/1/edit"
        assert_response :success
    end

    test "should product update" do
        put "/api/products/1", params: {product: {name: "test", content: "test", price: "100"}}
        assert_response :success
    end

    test "should product delete" do
        delete "/api/products/1"
        assert_response :success
    end
end