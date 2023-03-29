require "test_helper"

class AchievementsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @achievement = achievements(:one)
  end

  test "should get index" do
    get achievements_url, as: :json
    assert_response :success
  end

  test "should create achievement" do
    assert_difference("Achievement.count") do
      post achievements_url, params: { achievement: {  } }, as: :json
    end

    assert_response :created
  end

  test "should show achievement" do
    get achievement_url(@achievement), as: :json
    assert_response :success
  end

  test "should update achievement" do
    patch achievement_url(@achievement), params: { achievement: {  } }, as: :json
    assert_response :success
  end

  test "should destroy achievement" do
    assert_difference("Achievement.count", -1) do
      delete achievement_url(@achievement), as: :json
    end

    assert_response :no_content
  end
end
