require "test_helper"

class DeviseControllerTest < ActionDispatch::IntegrationTest
    test "should sign up user" do
        post "/users", params: { user: { name: "S.H.", about: "test", email: "test@hoge.com", password: "testhogehoge", password_confirmation: "testhogehoge" }}
        assert_equal true, User.last.email == "test@hoge.com"
    end
end