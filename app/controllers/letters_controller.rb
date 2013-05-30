class LettersController < ApplicationController
  respond_to :json

  def create
    letter = Letter.new params[:letter]
    letter.save!
    respond_with letter
  end
end
