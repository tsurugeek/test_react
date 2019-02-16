require 'test_helper'

class TicTacToeControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get tic_tac_toe_show_url
    assert_response :success
  end

end
