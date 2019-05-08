class Vue{
    constructor(options){
        this.$el=options.el;
        this.$data=options.data;
        if(this.$el){
            new Complier(this.$el,this);
        }

    }
}

class Complier{
    constructor(el,vm){
        this.el=this.isNodeElement(el)?el:document.querySelector(el);
        //把当前节点元素获取到放到内存中去
        let fragment=this.node2Fragment(this.el);
        console.log(fragment);
    }
    isNodeElement(node){
        return node.nodeType===1;
    }
    node2Fragment(node){
        //创建文档碎片
        let fragment=document.createDocumentFragment(node);
        let firstChild;
        while(firstChild=node.firstChild){
            fragment.appendChild(firstChild);
        }
        return fragment;
    }
}