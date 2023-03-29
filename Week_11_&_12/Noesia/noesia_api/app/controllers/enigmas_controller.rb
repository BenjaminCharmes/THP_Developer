class EnigmasController < ApplicationController
  before_action :set_enigma, only: %i[ show update destroy ]

  # GET /enigmas
  def index
    @enigmas = Enigma.all

    render json: @enigmas
  end

  # GET /enigmas/1
  def show
    render json: @enigma
  end

  # POST /enigmas
  def create
    @enigma = Enigma.new(enigma_params)

    if @enigma.save
      render json: @enigma, status: :created, location: @enigma
    else
      render json: @enigma.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /enigmas/1
  def update
    if @enigma.update(enigma_params)
      render json: @enigma
    else
      render json: @enigma.errors, status: :unprocessable_entity
    end
  end

  # DELETE /enigmas/1
  def destroy
    @enigma.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_enigma
      @enigma = Enigma.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def enigma_params
      params.require(:enigma).permit(:title, :description, :topic_id, :world, :level, :hint)
    end
end
