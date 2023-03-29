class Users::RegistrationsController < Devise::RegistrationsController
  before_action :configure_permitted_parameters

  respond_to :json

  def update
    @current_user_updated = User.find_by(id: account_update_params[:id])

    if @current_user_updated.update(account_update_params)
      render json: { message: 'Account updated successfully.' }, status: :ok
    else
      render json: { message: 'Failed to update account.' }, status: :unprocessable_entity
    end

  end

  private

  def respond_with(resource, _opts = {})
    register_success && return if resource.persisted?

    register_failed
  end

  def register_success
    render json: {
      message: 'Signed up sucessfully.',
      user: current_user
    }, status: :ok
  end

  def register_failed
    render json: { message: 'Something went wrong.' }, status: :unprocessable_entity
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :is_door_passed])
    devise_parameter_sanitizer.permit(:update, keys: [:username, :email, :password, :is_door_passed])
  end
  
  def account_update_params
    params.require(:registration).permit(:id, :username, :email, :password, :is_door_passed)
  end

end
