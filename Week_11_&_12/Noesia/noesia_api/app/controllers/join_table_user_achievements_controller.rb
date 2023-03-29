class JoinTableUserAchievementsController < ApplicationController
  before_action :set_join_table_user_achievement, only: %i[ show update destroy ]

  # GET /join_table_user_achievements
  def index
    @join_table_user_achievements = JoinTableUserAchievement.where(user_id: params[:user_id])

    render json: @join_table_user_achievements
  end

  # GET /join_table_user_achievements/1
  def show
    render json: @join_table_user_achievement
  end

  # POST /join_table_user_achievements
  def create
    
    @join_table_user_achievement = JoinTableUserAchievement.new(join_table_user_achievement_params)

    if @join_table_user_achievement.save
      render json: @join_table_user_achievement, status: :created, location: @join_table_user_achievement
    else
      render json: @join_table_user_achievement.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /join_table_user_achievements/1
  def update
    if @join_table_user_achievement.update(join_table_user_achievement_params)
      render json: @join_table_user_achievement
    else
      render json: @join_table_user_achievement.errors, status: :unprocessable_entity
    end
  end

  # DELETE /join_table_user_achievements/1
  def destroy
    @join_table_user_achievement.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_join_table_user_achievement
      @join_table_user_achievement = JoinTableUserAchievement.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def join_table_user_achievement_params
      params.require(:join_table_user_achievement).permit(:user_id, :achievement_id)
    end
end