require "test_helper"

class HistoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @history = histories(:one)
  end

  test "should get index" do
    get histories_url, as: :json
    assert_response :success
  end

  test "should create history" do
    assert_difference("History.count") do
      post histories_url, params: { history: {  } }, as: :json
    end

    assert_response :created
  end

  test "should show history" do
    get history_url(@history), as: :json
    assert_response :success
  end

  test "should update history" do
    patch history_url(@history), params: { history: {  } }, as: :json
    assert_response :success
  end

  test "should destroy history" do
    assert_difference("History.count", -1) do
      delete history_url(@history), as: :json
    end

    assert_response :no_content
  end
end
