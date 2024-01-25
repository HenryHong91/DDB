namespace FindNumber
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.display = new System.Windows.Forms.Label();
            this.textBox = new System.Windows.Forms.TextBox();
            this.ButtonInput = new System.Windows.Forms.Button();
            this.ButtonStart = new System.Windows.Forms.Button();
            this.Hint = new System.Windows.Forms.Button();
            this.display2 = new System.Windows.Forms.Label();
            this.normal = new System.Windows.Forms.RadioButton();
            this.easy = new System.Windows.Forms.RadioButton();
            this.hard = new System.Windows.Forms.RadioButton();
            this.label1 = new System.Windows.Forms.Label();
            this.Restart = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // display
            // 
            this.display.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.display.Dock = System.Windows.Forms.DockStyle.Top;
            this.display.Font = new System.Drawing.Font("Microsoft New Tai Lue", 24F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.display.Location = new System.Drawing.Point(0, 0);
            this.display.Name = "display";
            this.display.Size = new System.Drawing.Size(751, 99);
            this.display.TabIndex = 0;
            this.display.Text = "Find Number!";
            this.display.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            this.display.UseWaitCursor = true;
            // 
            // textBox
            // 
            this.textBox.Font = new System.Drawing.Font("Gulim", 16F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.textBox.Location = new System.Drawing.Point(104, 221);
            this.textBox.Name = "textBox";
            this.textBox.Size = new System.Drawing.Size(284, 44);
            this.textBox.TabIndex = 1;
            // 
            // ButtonInput
            // 
            this.ButtonInput.BackColor = System.Drawing.Color.NavajoWhite;
            this.ButtonInput.Font = new System.Drawing.Font("Gulim", 16F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.ButtonInput.Location = new System.Drawing.Point(431, 220);
            this.ButtonInput.Name = "ButtonInput";
            this.ButtonInput.Size = new System.Drawing.Size(109, 50);
            this.ButtonInput.TabIndex = 2;
            this.ButtonInput.Text = "Enter";
            this.ButtonInput.UseVisualStyleBackColor = false;
            this.ButtonInput.Click += new System.EventHandler(this.ButtonInput_Click);
            // 
            // ButtonStart
            // 
            this.ButtonStart.BackColor = System.Drawing.SystemColors.Info;
            this.ButtonStart.Dock = System.Windows.Forms.DockStyle.Bottom;
            this.ButtonStart.Font = new System.Drawing.Font("Gulim", 16F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.ButtonStart.Location = new System.Drawing.Point(0, 416);
            this.ButtonStart.Margin = new System.Windows.Forms.Padding(3, 3, 3, 10);
            this.ButtonStart.Name = "ButtonStart";
            this.ButtonStart.Size = new System.Drawing.Size(751, 84);
            this.ButtonStart.TabIndex = 3;
            this.ButtonStart.Text = "Start ";
            this.ButtonStart.UseVisualStyleBackColor = false;
            this.ButtonStart.Click += new System.EventHandler(this.ButtonStart_Click);
            // 
            // Hint
            // 
            this.Hint.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.Hint.Font = new System.Drawing.Font("Gulim", 16F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.Hint.Location = new System.Drawing.Point(564, 220);
            this.Hint.Name = "Hint";
            this.Hint.Size = new System.Drawing.Size(112, 50);
            this.Hint.TabIndex = 4;
            this.Hint.Text = "Hint";
            this.Hint.UseVisualStyleBackColor = false;
            this.Hint.Click += new System.EventHandler(this.Button1_Click);
            // 
            // display2
            // 
            this.display2.BackColor = System.Drawing.SystemColors.Control;
            this.display2.Dock = System.Windows.Forms.DockStyle.Top;
            this.display2.Font = new System.Drawing.Font("Gulim", 16F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.display2.ForeColor = System.Drawing.SystemColors.ActiveCaptionText;
            this.display2.Location = new System.Drawing.Point(0, 99);
            this.display2.Name = "display2";
            this.display2.Size = new System.Drawing.Size(751, 99);
            this.display2.TabIndex = 5;
            this.display2.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            this.display2.UseWaitCursor = true;
            // 
            // normal
            // 
            this.normal.AutoSize = true;
            this.normal.Location = new System.Drawing.Point(290, 375);
            this.normal.Name = "normal";
            this.normal.Size = new System.Drawing.Size(166, 22);
            this.normal.TabIndex = 6;
            this.normal.TabStop = true;
            this.normal.Text = "Normal - 3 Hints";
            this.normal.UseVisualStyleBackColor = true;
            this.normal.CheckedChanged += new System.EventHandler(this.RadioButton1_CheckedChanged);
            // 
            // easy
            // 
            this.easy.AutoSize = true;
            this.easy.Location = new System.Drawing.Point(105, 375);
            this.easy.Name = "easy";
            this.easy.Size = new System.Drawing.Size(154, 22);
            this.easy.TabIndex = 7;
            this.easy.Text = "EASY - 5 Hints";
            this.easy.UseVisualStyleBackColor = true;
            this.easy.CheckedChanged += new System.EventHandler(this.RadioButton2_CheckedChanged);
            // 
            // hard
            // 
            this.hard.AutoSize = true;
            this.hard.Location = new System.Drawing.Point(479, 375);
            this.hard.Name = "hard";
            this.hard.Size = new System.Drawing.Size(146, 22);
            this.hard.TabIndex = 8;
            this.hard.TabStop = true;
            this.hard.Text = "Hard - 2 Hints";
            this.hard.UseVisualStyleBackColor = true;
            this.hard.CheckedChanged += new System.EventHandler(this.RadioButton3_CheckedChanged);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.BackColor = System.Drawing.SystemColors.Control;
            this.label1.Font = new System.Drawing.Font("Gulim", 16F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.label1.ForeColor = System.Drawing.Color.MidnightBlue;
            this.label1.Location = new System.Drawing.Point(250, 317);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(265, 32);
            this.label1.TabIndex = 9;
            this.label1.Text = "Select the Level";
            // 
            // Restart
            // 
            this.Restart.BackColor = System.Drawing.SystemColors.Info;
            this.Restart.Font = new System.Drawing.Font("Gulim", 16F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.Restart.Location = new System.Drawing.Point(290, 438);
            this.Restart.Name = "Restart";
            this.Restart.Size = new System.Drawing.Size(164, 50);
            this.Restart.TabIndex = 10;
            this.Restart.Text = "Restart";
            this.Restart.UseVisualStyleBackColor = false;
            this.Restart.Visible = false;
            this.Restart.Click += new System.EventHandler(this.Restart_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(10F, 18F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(751, 500);
            this.Controls.Add(this.Restart);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.hard);
            this.Controls.Add(this.easy);
            this.Controls.Add(this.normal);
            this.Controls.Add(this.display2);
            this.Controls.Add(this.Hint);
            this.Controls.Add(this.ButtonStart);
            this.Controls.Add(this.ButtonInput);
            this.Controls.Add(this.textBox);
            this.Controls.Add(this.display);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Name = "Form1";
            this.Text = "Find Number By Henry Hong";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label display;
        private System.Windows.Forms.TextBox textBox;
        private System.Windows.Forms.Button ButtonInput;
        private System.Windows.Forms.Button ButtonStart;
        private System.Windows.Forms.Button Hint;
        private System.Windows.Forms.Label display2;
        private System.Windows.Forms.RadioButton normal;
        private System.Windows.Forms.RadioButton easy;
        private System.Windows.Forms.RadioButton hard;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button Restart;
    }
}

