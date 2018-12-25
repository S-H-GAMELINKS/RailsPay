require "test_helper"

class RoutesTest < ActionDispatch::IntegrationTest
    test "should get /" do
        get "/"
        assert_response :success
      end
end