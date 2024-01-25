
using System;
using System.Drawing;
using System.Windows.Forms;

namespace FindNumber
{
    public partial class Form1 : Form
    {
        private int findNumber = 0;
        private int chance = 0;
        private int hintChance =0;
        private bool gameStarted = false;  
        private readonly Timer timer = new Timer();
        private readonly Random random = new Random();

        public Form1()
        {
            InitializeComponent();
            display2.Text = "Press Start Button";
            easy.Checked = true;
            display.ForeColor = Color.White;
            timer.Interval = 500; 
            timer.Tick += Timer_Tick;  
            timer.Start();

        }

        private void Timer_Tick(object sender, EventArgs e)
        {
            // create random color
            Color randomColor = Color.FromArgb(random.Next(256), random.Next(256), random.Next(256));

            if (!gameStarted)
            {
                display.ForeColor = randomColor;

            }
            else
            {
                display.ForeColor = Color.Black;
            }
        }
            private void ButtonStart_Click(object sender, EventArgs e)
        {
            // when game started
            if (!gameStarted)
            {
                var randNumber = new Random();
                
                findNumber = randNumber.Next(1, randNumber.Next(0, 100));
                chance = 10;
                display.ForeColor = Color.Black;
                display2.ForeColor = Color.Black;
                display2.Text = "Range 1 ~ 100 ";
                display.Text = "Enter the Number";
                

                // when game started, mode deactivate and start button
                easy.Enabled = false;
                normal.Enabled = false;
                hard.Enabled = false;
                ButtonStart.Enabled = false;

               
                gameStarted = true;
                Restart.Visible = true;
            }
           
        }

        private void ButtonInput_Click(object sender, EventArgs e)
        {
            // before start game setting
            if (!gameStarted)
            {
                return;
            }
            if (!easy.Checked && !normal.Checked && !hard.Checked)
            {
                display.Text = "Select Mode";
                return;
            }
   
            if (!int.TryParse(textBox.Text, out int inputNumber))
            {
                MessageBox.Show("Please Enter a valid Number!");
                return;
            }

            if (inputNumber == findNumber)
            {
                display.ForeColor = Color.Blue;
                display.Text = "You Win, succeeded on the " + chance + " attempt!";
                display2.Text = "Answer was " + findNumber;

                ButtonStart.Enabled = true;

     
                gameStarted = false;
                easy.Enabled = true;
                normal.Enabled = true; hard.Enabled = true;
            }
            else
            {
                chance--;
                display.Text = chance + " left";
            }

            if (chance == 0)
            {
                display.ForeColor = Color.Red;
                display.Text = "You lose!";
                display2.Text = "Answer was " + findNumber;

            
                ButtonStart.Enabled = true;

           
                gameStarted = false;
                easy.Enabled = true;
                normal.Enabled = true; 
                hard.Enabled = true;
            }
        }

        private void Button1_Click(object sender, EventArgs e)
        {
            // if game is not start, no response
            if (!gameStarted)
            {
                return;
            }

            // if number , show error messageBox
            if (!int.TryParse(textBox.Text, out int inputNumber))
            {
                MessageBox.Show("Please Enter a valid Number!");
                return;
            }

            if (inputNumber < findNumber)
            {
                if (hintChance > 0)
                {
                    
                    hintChance--;
                    display.Text = "⬆️UP⬆️" + " Hint- " + hintChance + " left";

                }
                else if (hintChance <= 0)
                {
                    display.Text = "No more Hint";
                }
              
            }
            else if (inputNumber > findNumber)
            {
                
                if (hintChance > 0)
                {
                    display.ForeColor = Color.Blue;
                    hintChance--;
                    display.Text = "⬇️DOWN⬇️" + " Hint- " + hintChance + " left";
                    
                }else if(hintChance <= 0)
                {
                    display.Text = "No more Hint";
                }
                
            }
        }

        private void RadioButton3_CheckedChanged(object sender, EventArgs e)
        {
            if (hard.Checked)
            {
                display2.ForeColor = Color.Red;
                easy.Checked = false;
                normal.Checked = false;
                display2.Text = "Hard Mode - 2 Hints";
                hintChance = 2;
            }
           
        }

        private void RadioButton2_CheckedChanged(object sender, EventArgs e)
        {
           
            if (easy.Checked) {
                hard.Checked = false;
                normal.Checked = false;
                display2.ForeColor = Color.Blue;
                display2.Text = "Easy Mode - 5 Hints";
                hintChance = 5;
            }
            
        }

        private void RadioButton1_CheckedChanged(object sender, EventArgs e)
        {
            if (normal.Checked) {
                hard.Checked = false;
                easy.Checked= false;
                display2.ForeColor = Color.Orange;
                display2.Text = "Normal Mode - 3 Hints";
                hintChance = 3;
            }
        
        }

        private void Restart_Click(object sender, EventArgs e)
        {
           
              
                // Restart, reset all for new game
                findNumber = 0;
                chance = 0;
                hintChance = 0;
                gameStarted = false;

           
                display.Text = "Enter the Number";
                display2.Text = "Press Start Button";
                
            
                ButtonStart.Enabled = true;
            Restart.Visible = false;
                easy.Enabled = true;
                normal.Enabled = true;
                hard.Enabled = true;

              
                textBox.Text = "";

           
                    
                
            
        }

     
    }
}
