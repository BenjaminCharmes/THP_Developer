require "test_helper"

class JoinTableUserAchievementsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @join_table_user_achievement = join_table_user_achievements(:one)
  end

  test "should get index" do
    get join_table_user_achievements_url, as: :json
    assert_response :success
  end

  test "should create join_table_user_achievement" do
    assert_difference("JoinTableUserAchievement.count") do
      post join_table_user_achievements_url, params: { join_table_user_achievement: {  } }, as: :json
    end

    assert_response :created
  end

  test "should show join_table_user_achievement" do
    get join_table_user_achievement_url(@join_table_user_achievement), as: :json
    assert_response :success
  end

  test "should update join_table_user_achievement" do
    patch join_table_user_achievement_url(@join_table_user_achievement), params: { join_table_user_achievement: {  } }, as: :json
    assert_response :success
  end

  test "should destroy join_table_user_achievement" do
    assert_difference("JoinTableUserAchievement.count", -1) do
      delete join_table_user_achievement_url(@join_table_user_achievement), as: :json
    end

    assert_response :no_content
  end
end
