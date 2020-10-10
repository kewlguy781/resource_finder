class Api::CommentsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update]
  before_action :set_comment, only: [:update, :destroy]
  before_action :set_entry

  def index
    render json: @entry.comments
  end

  def comments_all
    render json: Comment.all
  end
    
  def user_comments
    render json: @current_user.comments
  end

  def new 
    @comment = Comment.new
  end

  def create
    comment = Comment.new(comment_params)
    if comment.save
      render json: comment
    else
      render json: comment.errors, status: 422
    end
  end

  def update
    if comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: 422
    end
  end

  def destroy
    @comment.destroy
  end

  private

  def set_commment
    @comment = Comment.find(params[:id])
  end

  def set_entry
    @entry = Entry.find(params[:entry_id])
  end

  def comment_params
    params.require(:comment).permit(:rating, :comment)
  end


end
