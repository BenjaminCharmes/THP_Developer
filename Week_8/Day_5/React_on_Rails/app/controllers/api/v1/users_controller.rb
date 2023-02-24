class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: %i[ show ]

  # GET /users or /users.json
  def index
    users = User.all.order(created_at: :desc)
    render json: users
  end

  # GET /users/1 or /users/1.json
  def show
    render json: @user
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:first_name, :last_name)
    end
end
