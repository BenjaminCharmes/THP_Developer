require "test_helper"

class EnigmasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @enigma = enigmas(:one)
  end

  test "should get index" do
    get enigmas_url, as: :json
    assert_response :success
  end

  test "should create enigma" do
    assert_difference("Enigma.count") do
      post enigmas_url, params: { enigma: {  } }, as: :json
    end

    assert_response :created
  end

  test "should show enigma" do
    get enigma_url(@enigma), as: :json
    assert_response :success
  end

  test "should update enigma" do
    patch enigma_url(@enigma), params: { enigma: {  } }, as: :json
    assert_response :success
  end

  test "should destroy enigma" do
    assert_difference("Enigma.count", -1) do
      delete enigma_url(@enigma), as: :json
    end

    assert_response :no_content
  end
end
