require "test_helper"

class DeviseControllerTest < ActionDispatch::IntegrationTest
    test "should sign up user" do
        post "/users", params: { user: { name: "S.H.", about: "test", email: "test@hoge.com", password: "testhogehoge", password_confirmation: "testhogehoge" }}
        assert_equal true, User.last.email == "test@hoge.com"
    end

    test "should sign in user" do
        post "/users", params: { user: { name: "S.H.", about: "test", email: "test@hoge.com", password: "testhogehoge", password_confirmation: "testhogehoge" }}
        post "/users/sign_in", params: { user: { email: "test@hoge.com", password: "testhogehoge" }}
        assert_response :redirect
    end

    test "should sign out user" do
        post "/users", params: { user: { name: "S.H.", about: "test", email: "test@hoge.com", password: "testhogehoge", password_confirmation: "testhogehoge" }}
        post "/users/sign_in", params: { user: { email: "test@hoge.com", password: "testhogehoge" }}
        delete "/users/sign_out"
        assert_response :redirect
    end
end