# MODBUS CRC16 for node

## CRC16 의 종류
 > [CRC16 참고자료](https://en.wikipedia.org/wiki/Cyclic_redundancy_check#Polynomial_representations_of_cyclic_redundancy_checks) 를 보면 다양한 crc16 의 종류가 있다  
 
## CRC
    Cyclic Redundancy Check 의 준말이며, 데이터를 전송할 때 전송된 데이터에 오류가 있는지를 확인하기 위한 체크값을 결정하는 방법 중 하나이다.

    n 비트의 주어진 정보가 있을때, 이를 k 비트 만큼 자리를 올리고 미리 약속한 k 비트의 키 값으로 나누면 r 비트의 나머지가 남게 된다. 송신측에서는 원래의 정보 비트를 k 비트 자리 올린 것에 r 비트의 나머지를 더해서 n+r 비트의 데이터를 만들어 보낸다.

    수신측에서는 수신된 n+r 비트의 데이터를 키 값으로 나누어 보고 나머지가 정확히 0 이 되는지를 검사하면 된다.

## CRC16
    위에서 k 가 16 비트이면 CRC-16, 32비트이면 CRC-32 가 되고 키 값으로는 보통 주어진 테이블을 이용한다.
## **CRC16-IBM** 을 알아보자
    Modbus, USB, ANSI 등.. 에 이용된다.
    (아마 IBM 의 룰을 따르지 않을까 생각)
> CRC-16-IBM(modbus) 에서는 X<sup>16</sup>  + x<sup>15</sup> + x<sup>2</sup> + 1 즉 0x8005 를 키로 이용한다.
계산 방법은 [이곳](https://m.blog.naver.com/PostView.nhn?blogId=h111922&logNo=220640536147&proxyReferer=https%3A%2F%2Fwww.google.com%2F
) 을 참조하길 바란다


    