<html>
    <title>Php</title>
<body>
        

                <?php

                $con = mysql_connect("final_portfolio_db","","");

                if (!$con)

                {

                die('Could not connect: ' . mysql_error());

                }

                

                mysql_select_db("", $con);

                

                $sql="INSERT INTO contact (fName, lName, email, message1)

                VALUES

                ('$_POST[fName]','$_POST[lName]','$_POST[email]','$_POST[message1]')";

                

                if (!mysql_query($sql,$con))

                {

                die('Error: ' . mysql_error());

                }

                echo "1 record added";

                

                mysql_close($con)

                ?>

</body>

</html>