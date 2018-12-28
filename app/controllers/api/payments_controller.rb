class Api::PaymentsController < ApplicationController
  
    # POST /api/payments
    # POST /api/payments.json
    def create
        Payjp.api_key = ENV['PAYJP_SECRET_KEY']

        charge = Payjp::Charge.create(
            :amount => payment_params[:price],
            :customer => current_user.customer_id,
            :currency => 'jpy',
        )

        render json: charge
    end
  
    private
  
      # Never trust parameters from the scary internet, only allow the white list through.
      def payment_params
        params.require(:payment).permit(:price)
      end
  end