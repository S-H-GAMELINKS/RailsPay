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
end