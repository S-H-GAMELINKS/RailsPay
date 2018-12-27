require "test_helper"

class RoutesTest < ActionDispatch::IntegrationTest
    test "should get /" do
      get "/"
      assert_response :success
    end

    test "should get /about" do
      get "/about"
      assert_response :success
    end

    test "should get /contact" do
      get "/contact"
      assert_response :success
    end

    test "should get /payment" do
      get "/payment"
      assert_response :success
    end

    test "should get /sign_up" do
      get "/sign_up"
      assert_response :success
    end

    test "should get /sign_in" do
      get "/sign_in"
      assert_response :success
    end

    test "should get /users/:id" do
      get "/users/1"
      assert_response :success
    end
    
    test "should get /users/mypages" do
      get "/users/mypages"
      assert_response :success
    end
    
    test "should get /users/mypages/edit" do
      get "/users/mypages/edit"
      assert_response :success
    end
end