; ModuleID = 'autocfg_4758fb03f34c985b_1.4d5bca89efc38dd7-cgu.0'
source_filename = "autocfg_4758fb03f34c985b_1.4d5bca89efc38dd7-cgu.0"
target datalayout = "e-m:e-p270:32:32-p271:32:32-p272:64:64-i64:64-i128:128-f80:128-n8:16:32:64-S128"
target triple = "x86_64-unknown-linux-gnu"

$"_ZN4core3f6421_$LT$impl$u20$f64$GT$9total_cmp17h62f45492c76cb3adE" = comdat nodeduplicate

$_ZN26autocfg_4758fb03f34c985b_15probe17hc27df67b494b5e4dE = comdat nodeduplicate

$asan.module_ctor = comdat any

$asan.module_dtor = comdat any

$sancov.module_ctor_8bit_counters = comdat any

$alloc_f93507f8ba4b5780b14b2c2584609be0.fabdd80c7764863a4aee6ca24e46f30e = comdat any

$alloc_ef0a1f828f3393ef691f2705e817091c.fabdd80c7764863a4aee6ca24e46f30e = comdat any

@alloc_f93507f8ba4b5780b14b2c2584609be0 = internal constant { <{ [8 x i8] }>, [24 x i8] } { <{ [8 x i8] }> <{ [8 x i8] c"\00\00\00\00\00\00\F0?" }>, [24 x i8] zeroinitializer }, comdat($alloc_f93507f8ba4b5780b14b2c2584609be0.fabdd80c7764863a4aee6ca24e46f30e), align 32
@alloc_ef0a1f828f3393ef691f2705e817091c = internal constant { <{ [8 x i8] }>, [24 x i8] } { <{ [8 x i8] }> <{ [8 x i8] c"\00\00\00\00\00\00\00@" }>, [24 x i8] zeroinitializer }, comdat($alloc_ef0a1f828f3393ef691f2705e817091c.fabdd80c7764863a4aee6ca24e46f30e), align 32
@___asan_gen_ = private constant [50 x i8] c"autocfg_4758fb03f34c985b_1.4d5bca89efc38dd7-cgu.0\00", align 1
@___asan_gen_.1 = private unnamed_addr constant [39 x i8] c"alloc_f93507f8ba4b5780b14b2c2584609be0\00", align 1
@___asan_gen_.2 = private unnamed_addr constant [39 x i8] c"alloc_ef0a1f828f3393ef691f2705e817091c\00", align 1
@__asan_global_alloc_f93507f8ba4b5780b14b2c2584609be0 = private global { i64, i64, i64, i64, i64, i64, i64, i64 } { i64 ptrtoint (ptr @0 to i64), i64 8, i64 32, i64 ptrtoint (ptr @___asan_gen_.1 to i64), i64 ptrtoint (ptr @___asan_gen_ to i64), i64 0, i64 0, i64 -1 }, section "asan_globals", comdat($alloc_f93507f8ba4b5780b14b2c2584609be0.fabdd80c7764863a4aee6ca24e46f30e), !associated !0
@__asan_global_alloc_ef0a1f828f3393ef691f2705e817091c = private global { i64, i64, i64, i64, i64, i64, i64, i64 } { i64 ptrtoint (ptr @1 to i64), i64 8, i64 32, i64 ptrtoint (ptr @___asan_gen_.2 to i64), i64 ptrtoint (ptr @___asan_gen_ to i64), i64 0, i64 0, i64 -1 }, section "asan_globals", comdat($alloc_ef0a1f828f3393ef691f2705e817091c.fabdd80c7764863a4aee6ca24e46f30e), !associated !1
@___asan_globals_registered = common hidden global i64 0
@__start_asan_globals = extern_weak hidden global i64
@__stop_asan_globals = extern_weak hidden global i64
@llvm.global_dtors = appending global [1 x { i32, ptr, ptr }] [{ i32, ptr, ptr } { i32 1, ptr @asan.module_dtor, ptr @asan.module_dtor }]
@__sancov_lowest_stack = external thread_local(initialexec) global i64
@__sancov_gen_ = private global [4 x i8] zeroinitializer, section "__sancov_cntrs", comdat($"_ZN4core3f6421_$LT$impl$u20$f64$GT$9total_cmp17h62f45492c76cb3adE"), align 1
@__sancov_gen_.3 = private constant [8 x ptr] [ptr @"_ZN4core3f6421_$LT$impl$u20$f64$GT$9total_cmp17h62f45492c76cb3adE", ptr inttoptr (i64 1 to ptr), ptr blockaddress(@"_ZN4core3f6421_$LT$impl$u20$f64$GT$9total_cmp17h62f45492c76cb3adE", %14), ptr null, ptr blockaddress(@"_ZN4core3f6421_$LT$impl$u20$f64$GT$9total_cmp17h62f45492c76cb3adE", %24), ptr null, ptr blockaddress(@"_ZN4core3f6421_$LT$impl$u20$f64$GT$9total_cmp17h62f45492c76cb3adE", %27), ptr null], section "__sancov_pcs", comdat($"_ZN4core3f6421_$LT$impl$u20$f64$GT$9total_cmp17h62f45492c76cb3adE"), align 8
@__sancov_gen_.4 = private global [1 x i8] zeroinitializer, section "__sancov_cntrs", comdat($_ZN26autocfg_4758fb03f34c985b_15probe17hc27df67b494b5e4dE), align 1
@__sancov_gen_.5 = private constant [2 x ptr] [ptr @_ZN26autocfg_4758fb03f34c985b_15probe17hc27df67b494b5e4dE, ptr inttoptr (i64 1 to ptr)], section "__sancov_pcs", comdat($_ZN26autocfg_4758fb03f34c985b_15probe17hc27df67b494b5e4dE), align 8
@__sancov_gen_.6 = private global [1 x i8] zeroinitializer, section "__sancov_cntrs", comdat($asan.module_dtor), align 1
@__sancov_gen_.7 = private constant [2 x ptr] [ptr @asan.module_dtor, ptr inttoptr (i64 1 to ptr)], section "__sancov_pcs", comdat($asan.module_dtor), align 8
@__start___sancov_cntrs = extern_weak hidden global i8
@__stop___sancov_cntrs = extern_weak hidden global i8
@llvm.global_ctors = appending global [2 x { i32, ptr, ptr }] [{ i32, ptr, ptr } { i32 1, ptr @asan.module_ctor, ptr @asan.module_ctor }, { i32, ptr, ptr } { i32 2, ptr @sancov.module_ctor_8bit_counters, ptr @sancov.module_ctor_8bit_counters }]
@__start___sancov_pcs = extern_weak hidden global i64
@__stop___sancov_pcs = extern_weak hidden global i64
@llvm.used = appending global [3 x ptr] [ptr @asan.module_ctor, ptr @asan.module_dtor, ptr @sancov.module_ctor_8bit_counters], section "llvm.metadata"
@llvm.compiler.used = appending global [10 x ptr] [ptr @alloc_f93507f8ba4b5780b14b2c2584609be0, ptr @alloc_ef0a1f828f3393ef691f2705e817091c, ptr @__asan_global_alloc_f93507f8ba4b5780b14b2c2584609be0, ptr @__asan_global_alloc_ef0a1f828f3393ef691f2705e817091c, ptr @__sancov_gen_, ptr @__sancov_gen_.3, ptr @__sancov_gen_.4, ptr @__sancov_gen_.5, ptr @__sancov_gen_.6, ptr @__sancov_gen_.7], section "llvm.metadata"

@0 = private alias { <{ [8 x i8] }>, [24 x i8] }, ptr @alloc_f93507f8ba4b5780b14b2c2584609be0
@1 = private alias { <{ [8 x i8] }>, [24 x i8] }, ptr @alloc_ef0a1f828f3393ef691f2705e817091c

; core::f64::<impl f64>::total_cmp
; Function Attrs: inlinehint nonlazybind sanitize_address uwtable
define hidden i8 @"_ZN4core3f6421_$LT$impl$u20$f64$GT$9total_cmp17h62f45492c76cb3adE"(ptr align 8 %self, ptr align 8 %other) unnamed_addr #0 comdat {
start:
  %right = alloca [8 x i8], align 8
  %left = alloca [8 x i8], align 8
  %0 = load i8, ptr @__sancov_gen_, align 1, !nosanitize !5
  %1 = add i8 %0, 1
  store i8 %1, ptr @__sancov_gen_, align 1, !nosanitize !5
  %2 = call ptr @llvm.frameaddress.p0(i32 0)
  %3 = ptrtoint ptr %2 to i64
  %4 = load i64, ptr @__sancov_lowest_stack, align 8, !nosanitize !5
  %5 = icmp ult i64 %3, %4
  br i1 %5, label %6, label %7, !prof !6

6:                                                ; preds = %start
  store i64 %3, ptr @__sancov_lowest_stack, align 8, !nosanitize !5
  br label %7

7:                                                ; preds = %start, %6
  call void @llvm.lifetime.start.p0(i64 8, ptr %left)
  %8 = ptrtoint ptr %self to i64
  %9 = lshr i64 %8, 3
  %10 = add i64 %9, 2147450880
  %11 = inttoptr i64 %10 to ptr
  %12 = load i8, ptr %11, align 1
  call void @__sanitizer_cov_trace_const_cmp1(i8 0, i8 %12)
  %13 = icmp ne i8 %12, 0
  br i1 %13, label %14, label %17

14:                                               ; preds = %7
  %15 = load i8, ptr getelementptr ([4 x i8], ptr @__sancov_gen_, i64 0, i64 1), align 1, !nosanitize !5
  %16 = add i8 %15, 1
  store i8 %16, ptr getelementptr ([4 x i8], ptr @__sancov_gen_, i64 0, i64 1), align 1, !nosanitize !5
  call void @__asan_report_load8(i64 %8) #6
  unreachable

17:                                               ; preds = %7
  %self1 = load double, ptr %self, align 8
  %_4 = bitcast double %self1 to i64
  store i64 %_4, ptr %left, align 8
  call void @llvm.lifetime.start.p0(i64 8, ptr %right)
  %18 = ptrtoint ptr %other to i64
  %19 = lshr i64 %18, 3
  %20 = add i64 %19, 2147450880
  %21 = inttoptr i64 %20 to ptr
  %22 = load i8, ptr %21, align 1
  call void @__sanitizer_cov_trace_const_cmp1(i8 0, i8 %22)
  %23 = icmp ne i8 %22, 0
  br i1 %23, label %24, label %27

24:                                               ; preds = %17
  %25 = load i8, ptr getelementptr ([4 x i8], ptr @__sancov_gen_, i64 0, i64 2), align 1, !nosanitize !5
  %26 = add i8 %25, 1
  store i8 %26, ptr getelementptr ([4 x i8], ptr @__sancov_gen_, i64 0, i64 2), align 1, !nosanitize !5
  call void @__asan_report_load8(i64 %18) #6
  unreachable

27:                                               ; preds = %17
  %28 = load i8, ptr getelementptr ([4 x i8], ptr @__sancov_gen_, i64 0, i64 3), align 1, !nosanitize !5
  %29 = add i8 %28, 1
  store i8 %29, ptr getelementptr ([4 x i8], ptr @__sancov_gen_, i64 0, i64 3), align 1, !nosanitize !5
  %self2 = load double, ptr %other, align 8
  %_7 = bitcast double %self2 to i64
  store i64 %_7, ptr %right, align 8
  %_13 = load i64, ptr %left, align 8
  %_12 = ashr i64 %_13, 63
  %_10 = lshr i64 %_12, 1
  %30 = load i64, ptr %left, align 8
  %31 = xor i64 %30, %_10
  store i64 %31, ptr %left, align 8
  %_18 = load i64, ptr %right, align 8
  %_17 = ashr i64 %_18, 63
  %_15 = lshr i64 %_17, 1
  %32 = load i64, ptr %right, align 8
  %33 = xor i64 %32, %_15
  store i64 %33, ptr %right, align 8
  %_21 = load i64, ptr %left, align 8
  %_22 = load i64, ptr %right, align 8
  call void @__sanitizer_cov_trace_cmp8(i64 %_21, i64 %_22)
  %34 = icmp sgt i64 %_21, %_22
  %35 = zext i1 %34 to i8
  call void @__sanitizer_cov_trace_cmp8(i64 %_21, i64 %_22)
  %36 = icmp slt i64 %_21, %_22
  %37 = zext i1 %36 to i8
  %_0 = sub nsw i8 %35, %37
  call void @llvm.lifetime.end.p0(i64 8, ptr %right)
  call void @llvm.lifetime.end.p0(i64 8, ptr %left)
  ret i8 %_0
}

; autocfg_4758fb03f34c985b_1::probe
; Function Attrs: nonlazybind sanitize_address uwtable
define void @_ZN26autocfg_4758fb03f34c985b_15probe17hc27df67b494b5e4dE() unnamed_addr #1 comdat {
start:
  %0 = load i8, ptr @__sancov_gen_.4, align 1, !nosanitize !5
  %1 = add i8 %0, 1
  store i8 %1, ptr @__sancov_gen_.4, align 1, !nosanitize !5
  %2 = call ptr @llvm.frameaddress.p0(i32 0)
  %3 = ptrtoint ptr %2 to i64
  %4 = load i64, ptr @__sancov_lowest_stack, align 8, !nosanitize !5
  %5 = icmp ult i64 %3, %4
  br i1 %5, label %6, label %7, !prof !6

6:                                                ; preds = %start
  store i64 %3, ptr @__sancov_lowest_stack, align 8, !nosanitize !5
  br label %7

7:                                                ; preds = %start, %6
; call core::f64::<impl f64>::total_cmp
  %_1 = call i8 @"_ZN4core3f6421_$LT$impl$u20$f64$GT$9total_cmp17h62f45492c76cb3adE"(ptr align 8 @alloc_f93507f8ba4b5780b14b2c2584609be0, ptr align 8 @alloc_ef0a1f828f3393ef691f2705e817091c)
  ret void
}

; Function Attrs: nocallback nofree nosync nounwind willreturn memory(argmem: readwrite)
declare void @llvm.lifetime.start.p0(i64 immarg, ptr nocapture) #2

; Function Attrs: nocallback nofree nosync nounwind willreturn memory(argmem: readwrite)
declare void @llvm.lifetime.end.p0(i64 immarg, ptr nocapture) #2

declare void @__asan_report_load_n(i64, i64)

declare void @__asan_loadN(i64, i64)

declare void @__asan_report_load1(i64)

declare void @__asan_load1(i64)

declare void @__asan_report_load2(i64)

declare void @__asan_load2(i64)

declare void @__asan_report_load4(i64)

declare void @__asan_load4(i64)

declare void @__asan_report_load8(i64)

declare void @__asan_load8(i64)

declare void @__asan_report_load16(i64)

declare void @__asan_load16(i64)

declare void @__asan_report_store_n(i64, i64)

declare void @__asan_storeN(i64, i64)

declare void @__asan_report_store1(i64)

declare void @__asan_store1(i64)

declare void @__asan_report_store2(i64)

declare void @__asan_store2(i64)

declare void @__asan_report_store4(i64)

declare void @__asan_store4(i64)

declare void @__asan_report_store8(i64)

declare void @__asan_store8(i64)

declare void @__asan_report_store16(i64)

declare void @__asan_store16(i64)

declare void @__asan_report_exp_load_n(i64, i64, i32)

declare void @__asan_exp_loadN(i64, i64, i32)

declare void @__asan_report_exp_load1(i64, i32)

declare void @__asan_exp_load1(i64, i32)

declare void @__asan_report_exp_load2(i64, i32)

declare void @__asan_exp_load2(i64, i32)

declare void @__asan_report_exp_load4(i64, i32)

declare void @__asan_exp_load4(i64, i32)

declare void @__asan_report_exp_load8(i64, i32)

declare void @__asan_exp_load8(i64, i32)

declare void @__asan_report_exp_load16(i64, i32)

declare void @__asan_exp_load16(i64, i32)

declare void @__asan_report_exp_store_n(i64, i64, i32)

declare void @__asan_exp_storeN(i64, i64, i32)

declare void @__asan_report_exp_store1(i64, i32)

declare void @__asan_exp_store1(i64, i32)

declare void @__asan_report_exp_store2(i64, i32)

declare void @__asan_exp_store2(i64, i32)

declare void @__asan_report_exp_store4(i64, i32)

declare void @__asan_exp_store4(i64, i32)

declare void @__asan_report_exp_store8(i64, i32)

declare void @__asan_exp_store8(i64, i32)

declare void @__asan_report_exp_store16(i64, i32)

declare void @__asan_exp_store16(i64, i32)

declare ptr @__asan_memmove(ptr, ptr, i64)

declare ptr @__asan_memcpy(ptr, ptr, i64)

declare ptr @__asan_memset(ptr, i32, i64)

declare void @__asan_handle_no_return()

declare void @__sanitizer_ptr_cmp(i64, i64)

declare void @__sanitizer_ptr_sub(i64, i64)

; Function Attrs: nocallback nofree nosync nounwind speculatable willreturn memory(none)
declare i1 @llvm.amdgcn.is.shared(ptr nocapture) #3

; Function Attrs: nocallback nofree nosync nounwind speculatable willreturn memory(none)
declare i1 @llvm.amdgcn.is.private(ptr nocapture) #3

declare void @__asan_before_dynamic_init(i64)

declare void @__asan_after_dynamic_init()

declare void @__asan_register_globals(i64, i64)

declare void @__asan_unregister_globals(i64, i64)

declare void @__asan_register_image_globals(i64)

declare void @__asan_unregister_image_globals(i64)

declare void @__asan_register_elf_globals(i64, i64, i64)

declare void @__asan_unregister_elf_globals(i64, i64, i64)

declare void @__asan_init()

; Function Attrs: nounwind
define internal void @asan.module_ctor() #4 comdat {
  call void @__asan_init()
  call void @__asan_version_mismatch_check_v8()
  call void @__asan_register_elf_globals(i64 ptrtoint (ptr @___asan_globals_registered to i64), i64 ptrtoint (ptr @__start_asan_globals to i64), i64 ptrtoint (ptr @__stop_asan_globals to i64))
  ret void
}

declare void @__asan_version_mismatch_check_v8()

; Function Attrs: nounwind
define internal void @asan.module_dtor() #4 comdat {
  %1 = load i8, ptr @__sancov_gen_.6, align 1, !nosanitize !5
  %2 = add i8 %1, 1
  store i8 %2, ptr @__sancov_gen_.6, align 1, !nosanitize !5
  %3 = call ptr @llvm.frameaddress.p0(i32 0)
  %4 = ptrtoint ptr %3 to i64
  %5 = load i64, ptr @__sancov_lowest_stack, align 8, !nosanitize !5
  %6 = icmp ult i64 %4, %5
  br i1 %6, label %7, label %8, !prof !6

7:                                                ; preds = %0
  store i64 %4, ptr @__sancov_lowest_stack, align 8, !nosanitize !5
  br label %8

8:                                                ; preds = %0, %7
  call void @__asan_unregister_elf_globals(i64 ptrtoint (ptr @___asan_globals_registered to i64), i64 ptrtoint (ptr @__start_asan_globals to i64), i64 ptrtoint (ptr @__stop_asan_globals to i64))
  ret void
}

declare void @__sanitizer_cov_trace_pc_indir(i64)

declare void @__sanitizer_cov_trace_cmp1(i8 zeroext, i8 zeroext)

declare void @__sanitizer_cov_trace_cmp2(i16 zeroext, i16 zeroext)

declare void @__sanitizer_cov_trace_cmp4(i32 zeroext, i32 zeroext)

declare void @__sanitizer_cov_trace_cmp8(i64, i64)

declare void @__sanitizer_cov_trace_const_cmp1(i8 zeroext, i8 zeroext)

declare void @__sanitizer_cov_trace_const_cmp2(i16 zeroext, i16 zeroext)

declare void @__sanitizer_cov_trace_const_cmp4(i32 zeroext, i32 zeroext)

declare void @__sanitizer_cov_trace_const_cmp8(i64, i64)

declare void @__sanitizer_cov_load1(ptr)

declare void @__sanitizer_cov_load2(ptr)

declare void @__sanitizer_cov_load4(ptr)

declare void @__sanitizer_cov_load8(ptr)

declare void @__sanitizer_cov_load16(ptr)

declare void @__sanitizer_cov_store1(ptr)

declare void @__sanitizer_cov_store2(ptr)

declare void @__sanitizer_cov_store4(ptr)

declare void @__sanitizer_cov_store8(ptr)

declare void @__sanitizer_cov_store16(ptr)

declare void @__sanitizer_cov_trace_div4(i32 zeroext)

declare void @__sanitizer_cov_trace_div8(i64)

declare void @__sanitizer_cov_trace_gep(i64)

declare void @__sanitizer_cov_trace_switch(i64, ptr)

declare void @__sanitizer_cov_trace_pc()

declare void @__sanitizer_cov_trace_pc_guard(ptr)

; Function Attrs: nocallback nofree nosync nounwind willreturn memory(none)
declare ptr @llvm.frameaddress.p0(i32 immarg) #5

declare void @__sanitizer_cov_8bit_counters_init(ptr, ptr)

; Function Attrs: nounwind
define internal void @sancov.module_ctor_8bit_counters() #4 comdat {
  call void @__sanitizer_cov_8bit_counters_init(ptr @__start___sancov_cntrs, ptr @__stop___sancov_cntrs)
  call void @__sanitizer_cov_pcs_init(ptr @__start___sancov_pcs, ptr @__stop___sancov_pcs)
  ret void
}

declare void @__sanitizer_cov_pcs_init(ptr, ptr)

attributes #0 = { inlinehint nonlazybind sanitize_address uwtable "target-cpu"="x86-64" }
attributes #1 = { nonlazybind sanitize_address uwtable "target-cpu"="x86-64" }
attributes #2 = { nocallback nofree nosync nounwind willreturn memory(argmem: readwrite) }
attributes #3 = { nocallback nofree nosync nounwind speculatable willreturn memory(none) }
attributes #4 = { nounwind }
attributes #5 = { nocallback nofree nosync nounwind willreturn memory(none) }
attributes #6 = { nomerge }

!llvm.module.flags = !{!2, !3}
!llvm.ident = !{!4}

!0 = !{ptr @alloc_f93507f8ba4b5780b14b2c2584609be0}
!1 = !{ptr @alloc_ef0a1f828f3393ef691f2705e817091c}
!2 = !{i32 8, !"PIC Level", i32 2}
!3 = !{i32 2, !"RtLibUseGOT", i32 1}
!4 = !{!"rustc version 1.85.0-nightly (a47555110 2024-11-22)"}
!5 = !{}
!6 = !{!"branch_weights", i32 1, i32 1048575}
