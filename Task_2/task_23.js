�}@    �����5���"f��1��h���t�MX��H�p�T���ם� ��QaeEe�.)��Aj<)��g���,s*Y�@���՟~�����H ��E�ȥ�����3��ҫD�`���*�8�R�s�f>��NK���\$��	:�Q��=�(����*G��!��C�hi��4&^�'�ti����O����ļ�:�;-�J�����՗p��(S���P��
p����/���։cB�f�_T��mK�(!��CA�Hj���ؑŷ�,�`Ve�!q�)� j��.�1�Jy=���{�H���KpC"��z����#�wGL��L�L^����ZKs�vi�-��́,ه�Py��0u֊*���(,9Li:�ś�zcppzY�R�S��U�*�+r^�v�|%�!ȱ�Wlֺ[hJ'T��
/W�����h[�Ҕய��_�B�.�
a30
o1�]0�A�^U4Fb�1i�����)Zf�dl3�w���+a�m@+alض��-%��I�����_�>�L��1{[;��9��OKP����$�����_r�sI:�|�!��TQ-�a  8_576�E�Ag_���zS�*+B[ϛ9�V�ǎ���y7]�]nadH��k�7"�[����s ��	II\7�<����t��V9�4��tMpP�(LH/���� ��_ڿId�ԁNA	qRB%7|v��Y�۶�7;Z?�'��Z�%��_���g_Ў�xTKQ�j�E���@LK�U��Q[�,G��ܔ��\��6i��C�)�@�:��*�ʾi}��Iˬ��������?JӲ�;�`��ưw�`Ʈ&�P�J�t-	���K�m9�Y��_9�X72JJV�t6��U�����vnG�|����5@����9��d"��&l[��NS��x�h���":��C���S�ɭ��Hs]�;�HXd�6�F:��e����)>��Gn���l����8�P lD3���C��U��hA�xx����MHn�T���>q�����ۄf�NK T�>��I{j�����Z0
\%yc�J�G\+ ��O|e�:�MW�L6��d$6R�$(�J��W� qHYOTB��*+z*taҞ���yJ���*q�Z�S{M���r��}CT���Pܲ!d���'�~��"���y�8�O�J2�1;017�O�v	��4;v����ܲyk�Y�Y��d���
���,�.ј,��X
3��0=�ͻ=N�ͱ�V��*��8����i~ �����b�ai�d���͍,�K5+����@;k�8������*Hkl�����ӉC�O�L�_��F���t�"�<�f���>�|�����	��.9%�6�c�`���%ڈ�%ۚ��"S�y��5$��.C*$jqG��֑OK:�>N��ҍ���Tp����"���R�Җ����..�x�&�T�no,��%�fM�&��OtQ�Kc�����O�f��ڶ��dµ�l�.�	j�jj����cDKC��bn�֟��J�"4XL�)[A�T��������*gb�U��Ŗu�����.G��^�v�6��.��������Q��ί��_���H�KWOҮS�ỷ�2W2�?�|�_1�u�ͳq��1:���M�#��r&���iB.�H���о1������A�T+�㚽����&�k���b�[�I�rl!�}�k$�X�d�|�PW��=X|�6��?K�Y������.�ǆ&��q�ϟ+O/�kW�+vgT_�8ѫ�7d��lX�=y�Lj��U�D0��C�v����J��1;P��	�"0��3ڟ���Q!��/b��d�"���\yu|kX򈾏��
ᆵBBi�C��O%dP �H7t���c��u��T���8SC����^7GV�z�nyM�N��T�N
�(��g���.�q���h�l�h��-��2.�@d%<9���r��}��!����P8������Z���U^z�; j�[��J �r\�N�$\_�\�8!� parent=targetEle.parentNode;
		parent.removeChild(targetEle);
		while(childd.length){
			parent.insertBefore(childd[0],next);
			childd.shift();
		}
		targetEle="";
	}
}

function init(){
	for(var i=0;i<divs.length;i++){
		addEventHandler(divs[i],"click",selectEle);
	}
	addEventHandler(remove,"click",removeNode);
	addEventHandler(add,"click",addNode);
}
init();