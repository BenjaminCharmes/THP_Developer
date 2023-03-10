require "test_helper"

class AdvertisementsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @advertisement = advertisements(:one)
  end

  test "should get index" do
    get advertisements_url, as: :json
    assert_response :success
  end

  test "should create advertisement" do
    assert_difference("Advertisement.count") do
      post advertisements_url, params: { advertisement: { address: @advertisement.address, category: @advertisement.category, city: @advertisement.city, description: @advertisement.description, garage: @advertisement.garage, garden: @advertisement.garden, picture_url: @advertisement.picture_url, price: @advertisement.price, room: @advertisement.room, surface: @advertisement.surface, title: @advertisement.title, zip_code: @advertisement.zip_code } }, as: :json
    end

    assert_response :created
  end

  test "should show advertisement" do
    get advertisement_url(@advertisement), as: :json
    assert_response :success
  end

  test "should update advertisement" do
    patch advertisement_url(@advertisement), params: { advertisement: { address: @advertisement.address, category: @advertisement.category, city: @advertisement.city, description: @advertisement.description, garage: @advertisement.garage, garden: @advertisement.garden, picture_url: @advertisement.picture_url, price: @advertisement.price, room: @advertisement.room, surface: @advertisement.surface, title: @advertisement.title, zip_code: @advertisement.zip_code } }, as: :json
    assert_response :success
  end

  test "should destroy advertisement" do
    assert_difference("Advertisement.count", -1) do
      delete advertisement_url(@advertisement), as: :json
    end

    assert_response :no_content
  end
end
